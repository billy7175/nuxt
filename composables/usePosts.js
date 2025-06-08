import { useQuery } from '@tanstack/vue-query'
import { usePostApi } from '~/composables/usePostApi'

export const usePosts = () => {
  const api = usePostApi()

  const fetchPosts = () => useQuery({
    queryKey: ['posts'],
    queryFn: api.fetchPosts
  })

  return {
    fetchPosts
  }
}

// import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
// import { usePostApi } from '~/composables/usePostApi'

// export const usePosts = () => {
//   const queryClient = useQueryClient()
//   const api = usePostApi()

//   const fetchPostsQuery = () => useQuery({
//     queryKey: ['posts'],
//     queryFn: api.fetchPosts
//   })

//   const fetchPostQuery = (id) => useQuery({
//     queryKey: ['posts', id],
//     queryFn: () => api.fetchPost(id),
//     enabled: !!id
//   })

//   const createPostMutation = () => useMutation({
//     mutationFn: api.createPost,
//     onSuccess: (newPost) => {
//       queryClient.setQueryData(['posts'], (old) => old ? [...old, newPost] : [newPost])
//       queryClient.invalidateQueries({ queryKey: ['posts'] })
//     }
//   })

//   const updatePostMutation = () => useMutation({
//     mutationFn: api.updatePost,
//     onSuccess: (updatedPost) => {
//       queryClient.setQueryData(['posts'], (old) =>
//         old ? old.map(post => post.id === updatedPost.id ? updatedPost : post) : [updatedPost]
//       )
//       queryClient.setQueryData(['posts', updatedPost.id], updatedPost)
//       queryClient.invalidateQueries({ queryKey: ['posts'] })
//     }
//   })

//   const deletePostMutation = () => useMutation({
//     mutationFn: api.deletePost,
//     onSuccess: (_, id) => {
//       queryClient.setQueryData(['posts'], (old) =>
//         old ? old.filter(post => post.id !== id) : []
//       )
//       queryClient.invalidateQueries({ queryKey: ['posts'] })
//     }
//   })

//   return {
//     fetchPostsQuery,
//     fetchPostQuery,
//     createPostMutation,
//     updatePostMutation,
//     deletePostMutation
//   }
// }