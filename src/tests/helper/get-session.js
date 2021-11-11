const getSession = () => {
	const session = {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.iXEopsiqIO9uGmOKI8jEib2uoVchzkjk2d4vPAfoMXM.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM2NjMwMTQ0LCJzdWIiOiJlYTM3ZmE0MC0xZmM3LTQxYzAtOTIzNS1kNmIxN2U3NjE4OTAiLCJlbWFpbCI6Im1yY2dyaHJkdEBpY2xvdWQuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCJ9LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQifQ",
    "token_type": "bearer",
    "expires_in": 3600,
    "refresh_token": "YQVePM9tHxbkHhYJotBFrQ",
    "user": {
        "id": "ea37fa40-1fc7-41c0-9235-d6b17e761890",
        "aud": "authenticated",
        "role": "authenticated",
        "email": "maurice@apple.com",
        "email_confirmed_at": "2021-10-27T15:29:36.793843Z",
        "phone": "",
        "confirmation_sent_at": "2021-10-27T15:29:17.890985Z",
        "confirmed_at": "2021-10-27T15:29:36.793843Z",
        "recovery_sent_at": "2021-10-29T09:34:28.778065Z",
        "last_sign_in_at": "2021-11-11T10:29:04.727963287Z",
        "app_metadata": {
            "provider": "email"
        },
        "user_metadata": {},
        "identities": [],
        "created_at": "2021-10-27T15:29:17.884337Z",
        "updated_at": "2021-11-11T10:29:04.729279Z"
    },
    "expires_at": 1636630145
	}
	return session
}

export default getSession
