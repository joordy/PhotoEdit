import { checkID } from '../data/index'

// Get ID from user's URL.
export const uniqueFilter = async () => {
  let url = window.location.href
  url = url.replace(`${window.location.origin}/image/`, '')
  const image = await checkID(url)
  return image
}

// Map data object with usable information
export const filterItems = (data) => {
  return data.map((item) => {
    return {
      alt_description: item.alt_description,
      created_at: item.created_at,
      updated_at: item.updated_at,
      current_user_collections: item.current_user_collections,
      height: item.height,
      width: item.width,
      id: item.id,
      likes: item.likes,
      links: {
        download: item.links.download,
        download_location: item.links.download_location,
        html: item.links.html,
        self: item.links.self,
      },
      urls: {
        raw: item.urls.raw,
        full: item.urls.full,
        regular: item.urls.regular,
        small: item.urls.small,
      },
      user: {
        name: item.user.name,
        username: item.user.username,
        first_name: item.user.first_name,
        last_name: item.user.last_name ? item.user.last_name : undefined,
        id: item.user.id,
        bio: item.user.bio,
        portfolio_url: item.user.portfolio_url,
        instagram_username: item.user.instagram_username,
        twitter_username: item.user.twitter_username,
        total_photos: item.user.total_photos,
        total_likes: item.user.total_likes,
        total_collections: item.user.total_collections,
        profile_image: {
          large: item.user.profile_image.large,
          medium: item.user.profile_image.medium,
          small: item.user.profile_image.small,
        },
      },
    }
  })
}

// Sort data from highest to low count of likes
export const sortItems = (data) => {
  return data.sort((low, high) => high.likes - low.likes)
}
