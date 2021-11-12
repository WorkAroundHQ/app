import { render, screen, waitFor } from "@testing-library/react"
import Profile from "../pages/Profile"

import getSession from './helper/get-session'

test('that the edit button is active by default', async () => {
	render(<Profile session={getSession()} />)

	const editBtn = await waitFor(() => screen.getByRole('button', { name: /^Edit$/ }))

	expect(editBtn).toBeEnabled()
})

test('that all form inputs are disabled by default', () => {
	render(<Profile session={getSession()} />)

	const emailInput = screen.getByLabelText('Email')
	const nameInput = screen.getByLabelText('Name')
	const jobInput = screen.getByLabelText('Job Description')
	const twitterInput = screen.getByLabelText('Twitter')
	const instagramInput = screen.getByLabelText('Instagram')
	const linkedinInput = screen.getByLabelText('LinkedIn')
	const githubInput = screen.getByLabelText('GitHub')
	const openInput = screen.getByLabelText('Open for work?')
	const aboutInput = screen.getByLabelText('About me')

	expect(emailInput).toBeDisabled()
	expect(nameInput).toBeDisabled()
	expect(jobInput).toBeDisabled()
	expect(twitterInput).toBeDisabled()
	expect(instagramInput).toBeDisabled()
	expect(linkedinInput).toBeDisabled()
	expect(githubInput).toBeDisabled()
	expect(openInput).toBeDisabled()
	expect(aboutInput).toBeDisabled()
})

test('that all form inputs have the correct value', async () => {
	render(<Profile session={getSession()} />)

	const emailInput = await waitFor(() => screen.getByDisplayValue('tim.apple@pear.com'))
	const nameInput = await waitFor(() => screen.getByDisplayValue('Tim Apple'))
	const jobInput = await waitFor(() => screen.getByDisplayValue('Pear CEO'))
	const twitterInput = await waitFor(() => screen.getByDisplayValue('applePearTwit'))
	const instagramInput = await waitFor(() => screen.getByDisplayValue('applePearInsta'))
	const linkedinInput = await waitFor(() => screen.getByDisplayValue('tim-apple'))
	const githubInput = await waitFor(() => screen.getByDisplayValue('applePearHubber'))
	const openInput = screen.getByLabelText('Open for work?')
	const aboutInput = await waitFor(() => screen.getByDisplayValue('I\'m Tim Apple, Pear CEO'))

	expect(emailInput).toHaveAttribute('id', 'email')
	expect(nameInput).toHaveAttribute('id', 'name')
	expect(jobInput).toHaveAttribute('id', 'job')
	expect(twitterInput).toHaveAttribute('id', 'twitter')
	expect(instagramInput).toHaveAttribute('id', 'instagram')
	expect(linkedinInput).toHaveAttribute('id', 'linkedin')
	expect(githubInput).toHaveAttribute('id', 'github')
	expect(openInput).not.toBeChecked()
	expect(aboutInput).toHaveAttribute('id', 'bio')
})

test('that on edit button click it changes to save button', async () => {
	render(<Profile session={getSession()} />)

	const editBtn = await waitFor(() => screen.getByRole('button', { name: /^Edit$/ }))

	editBtn.click()
	expect(editBtn).toHaveTextContent(/^Save$/)
})

test('that on edit button click the inputs get enabled (except email)', async () => {
	render(<Profile session={getSession()} />)

	const editBtn = await waitFor(() => screen.getByRole('button', { name: /^Edit$/ }))
	const emailInput = screen.getByLabelText('Email')
	const nameInput = screen.getByLabelText('Name')
	const jobInput = screen.getByLabelText('Job Description')
	const twitterInput = screen.getByLabelText('Twitter')
	const instagramInput = screen.getByLabelText('Instagram')
	const linkedinInput = screen.getByLabelText('LinkedIn')
	const githubInput = screen.getByLabelText('GitHub')
	const openInput = screen.getByLabelText('Open for work?')
	const aboutInput = screen.getByLabelText('About me')

	editBtn.click()
	expect(emailInput).toBeDisabled()
	expect(nameInput).toBeEnabled()
	expect(jobInput).toBeEnabled()
	expect(twitterInput).toBeEnabled()
	expect(instagramInput).toBeEnabled()
	expect(linkedinInput).toBeEnabled()
	expect(githubInput).toBeEnabled()
	expect(openInput).toBeEnabled()
	expect(aboutInput).toBeEnabled()
})

test('that the upload button is only visible while editing', async () => {
	render(<Profile session={getSession()} />)

	const editBtn = await waitFor(() => screen.getByRole('button', { name: /^Edit$/ }))
	const uploadBtn = screen.getByTestId('upload-button')
	
	expect(uploadBtn).not.toBeVisible()
	editBtn.click()
	expect(uploadBtn).toBeVisible()
})
