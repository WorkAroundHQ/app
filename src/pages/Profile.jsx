import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import FormElement from "../components/FormElement"
import Switch from "../components/Switch"
import Button from "../components/Button"
import Avatar from "../components/Avatar"
import '../scss/pages/profile.scss'

const Profile = ({ session }) => {
	const [loading, setLoading] = useState(true)
	const [editing, setEditing] = useState(false)

  const [name, setName] = useState('')
  const [avatar_url, setAvatarUrl] = useState('')
  const [job, setJob] = useState('')
	const [bio, setBio] = useState('')
	const [twitter, setTwitter] = useState('')
	const [instagram, setInstagram] = useState('')
	const [linkedin, setLinkedin] = useState('')
	const [github, setGithub] = useState('')
	const [openForWork, setOpenForWork] = useState(false)

	useEffect(() => {
		let isMounted = true;
    getProfile().then(profile => {
			if (isMounted) {
				setName(profile.name)
				setAvatarUrl(profile.avatar_url)
				setJob(profile.job)
				setBio(profile.bio)
				setTwitter(profile.twitter)
				setInstagram(profile.instagram)
				setLinkedin(profile.linkedin)
				setGithub(profile.github)
				setOpenForWork(profile.open_for_work)
				setLoading(false)
			}
		})
		return () => { isMounted = false }
  }, [session])

	const getProfile = async () => {
		try {
      setLoading(true)
      let { data, error, status } = await supabase
        .from('users')
        .select(`name, avatar_url, job, bio, twitter, instagram, linkedin, github, open_for_work`)
        .single()

      if (error && status !== 406) {
        throw error
      }
			return data
    } catch (error) {
      alert(error.message)
    }
	}

	const updateProfile = async () => {
		try {
      setLoading(true)
      const user = supabase.auth.user()
      const updates = {
        id: user.id,
        name,
				avatar_url,
        job,
        bio,
				twitter,
				instagram,
				linkedin,
				github,
				open_for_work: openForWork,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('users').upsert(updates, {
        returning: 'minimal',
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
	}

	const handleEditing = () => {
		if (editing) {
			updateProfile()
		}
		setEditing(!editing)
	}

	return (
		<section id='profile'>
			<h1>Profile</h1>
			<Button text={editing ? 'Save' : loading ? 'Loading' : 'Edit'} mode='primary' onClick={() => handleEditing()} />
			<Avatar url={avatar_url} size={150} editing={editing}
				onUpload={(url) => {
					setAvatarUrl(url)
				}}
			/>
			<div className='profile-form'>
				<FormElement className='input' id='email' type='email' label='Email' value={session.user.email} disabled={true} />
				<FormElement className='input' id='name' type='text' label='Name' value={name} handleChange={setName} disabled={!editing} />
				<FormElement className='input' id='job' type='text' label='Job Description' value={job} handleChange={setJob} disabled={!editing} />
				<FormElement className='input' id='twitter' type='text' label='Twitter' value={twitter} handleChange={setTwitter} disabled={!editing} />
				<FormElement className='input' id='instagram' type='text' label='Instagram' value={instagram} handleChange={setInstagram} disabled={!editing} />
				<FormElement className='input' id='linkedin' type='text' label='LinkedIn' value={linkedin} handleChange={setLinkedin} disabled={!editing} />
				<FormElement className='input' id='github' type='text' label='GitHub' value={github} handleChange={setGithub} disabled={!editing} />
				<Switch className='checkbox' id='open_for_work' label='Open for work?' value={openForWork} handleChange={setOpenForWork} disabled={!editing} />
				<FormElement className='input' id='bio' type='text' label='About me' value={bio} handleChange={setBio} disabled={!editing} />
			</div>
			<Button text='Sign out' mode='danger' onClick={() => supabase.auth.signOut()} />
		</section>
	)
}

export default Profile
