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
    getProfile()
  }, [session])

	const getProfile = async () => {
		try {
      setLoading(true)
      const user = supabase.auth.user()
      let { data, error, status } = await supabase
        .from('users')
        .select(`name, avatar_url, job, bio, twitter, instagram, linkedin, github, open_for_work`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
				setName(data.name)
				setAvatarUrl(data.avatar_url)
				setJob(data.job)
				setBio(data.bio)
				setTwitter(data.twitter)
				setInstagram(data.instagram)
				setLinkedin(data.linkedin)
				setGithub(data.github)
				setOpenForWork(data.open_for_work)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
	}

	const updateProfile = async () => {
		console.log('Profile Updated!')
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
				<FormElement className='text' id='email' type='email' label='Email' value={session.user.email} disabled={true} />
				<FormElement className='text' id='name' type='text' label='Name' value={name} handleChange={setName} disabled={!editing} />
				<FormElement className='text' id='job' type='text' label='Job Description' value={job} handleChange={setJob} disabled={!editing} />
				<FormElement className='text' id='twitter' type='text' label='Twitter' value={twitter} handleChange={setTwitter} disabled={!editing} />
				<FormElement className='text' id='instagram' type='text' label='Instagram' value={instagram} handleChange={setInstagram} disabled={!editing} />
				<FormElement className='text' id='linkedin' type='text' label='LinkedIn' value={linkedin} handleChange={setLinkedin} disabled={!editing} />
				<FormElement className='text' id='github' type='text' label='GitHub' value={github} handleChange={setGithub} disabled={!editing} />
				<Switch className='checkbox' id='open_for_work' label='Open for work?' value={openForWork} handleChange={setOpenForWork} disabled={!editing} />
				<FormElement className='text' id='bio' type='text' label='About me' value={bio} handleChange={setBio} disabled={!editing} />
			</div>
			<Button text='Sign out' mode='attention' onClick={() => supabase.auth.signOut()} />
		</section>
	)
}

export default Profile
