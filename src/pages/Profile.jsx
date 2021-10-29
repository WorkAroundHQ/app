import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import FormElement from "../components/FormElement"
import Switch from "../components/Switch"
import '../scss/pages/profile.scss'

const Profile = ({ session }) => {
	const [loading, setLoading] = useState(true)
	const [editing, setEditing] = useState(true)

  const [name, setName] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const [job, setJob] = useState(null)
	const [bio, setBio] = useState(null)
	const [twitter, setTwitter] = useState(null)
	const [instagram, setInstagram] = useState(null)
	const [linkedin, setLinkedin] = useState(null)
	const [github, setGithub] = useState(null)
	const [openForWork, setOpenForWork] = useState(null)

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

	return (
		<section id='profile'>
			<h1>Profile</h1>
			<FormElement className='text' id='email' type='email' label='Email' value={session.user.email} disabled={true} />
			<FormElement className='text' id='name' type='text' label='Name' value={name} handleChange={setName} disabled={!editing} />
			<FormElement className='text' id='job' type='text' label='Job Description' value={job} handleChange={setJob} disabled={!editing} />
			<FormElement className='text' id='twitter' type='text' label='Twitter' value={twitter} handleChange={setTwitter} disabled={!editing} />
			<FormElement className='text' id='instagram' type='text' label='Instagram' value={instagram} handleChange={setInstagram} disabled={!editing} />
			<FormElement className='text' id='linkedin' type='text' label='LinkedIn' value={linkedin} handleChange={setLinkedin} disabled={!editing} />
			<FormElement className='text' id='github' type='text' label='GitHub' value={github} handleChange={setGithub} disabled={!editing} />
			<Switch className='checkbox' id='open_for_work' label='Open for work?' value={openForWork} handleChange={setOpenForWork} disabled={!editing} />
			<FormElement className='multiline-text' id='bio' type='text' label='About me' value={bio} handleChange={setBio} disabled={!editing} />
			<button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
		</section>
	)
}

export default Profile
