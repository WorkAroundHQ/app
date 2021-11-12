import { rest } from 'msw'

export const handlers = [
  rest.get(`https://nmlujrinurqpqyaokxmt.supabase.co/rest/v1/users`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				name: 'Tim Apple',
				avatar_url: '',
				job: 'Pear CEO',
				bio: 'I\'m Tim Apple, Pear CEO',
				twitter: 'applePearTwit',
				instagram: 'applePearInsta',
				linkedin: 'tim-apple',
				github: 'applePearHubber',
				open_for_work: false
			})
		)
	})
]
