import { render, screen } from "@testing-library/react"
import Profile from "../pages/Profile"

import getSession from './helper/get-session'

test('that the edit button is active by default', () => {
	render(<Profile session={getSession()} />)

	const editBtn = screen.getByRole('button', { name: /^Edi$/ })

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

test('that on edit button click it changes to save button', () => {
	render(<Profile session={getSession()} />)

	const editBtn = screen.getByRole('button', { name: /^Edit$/ })

	editBtn.click()
	expect(editBtn).toHaveTextContent(/^Save$/)
})

test('that on edit button click the inputs get enabled (except email)', () => {
	render(<Profile session={getSession()} />)

	const editBtn = screen.getByRole('button', { name: /^Edit$/ })
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

test('that the upload button is only visible while editing', () => {
	render(<Profile session={getSession()} />)

	const editBtn = screen.getByRole('button', { name: /^Edit$/ })
	const uploadBtn = screen.getByTestId('upload-button')
	
	expect(uploadBtn).not.toBeVisible()
	editBtn.click()
	expect(uploadBtn).toBeVisible()
})
