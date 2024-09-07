import { rest } from "msw";

const baseURL = "https://drf-api-alsona-0c809e0777a5.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 1,
        "username": "gitpod",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile": {
            "id": 1,
            "owner": "gitpod",
            "created_at": "15 Aug 2024",
            "updated_at": "15 Aug 2024",
            "name": "Kubilay",
            "content": "hello",
            "image": "https://res.cloudinary.com/dbu8nqoae/image/upload/v1/media/images/default_profile.jpg",
            "is_owner": true,
            "following_id": null,
            "posts_count": 0,
            "followers_count": 1,
            "following_count": 1
        },
        "profile_id": 1,
        "profile_image": "https://res.cloudinary.com/dbu8nqoae/image/upload/v1/media/images/default_profile.jpg"
         })
        );
      }),
      rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
      }),
];