import { useNuxtApp } from '#app'

export const usePostApi = () => {
  const axios = useNuxtApp().$axios

  return {
    fetchPosts: async () => {
      try {
        const response = await axios.get('/posts')
        return response.data
      } catch (error) {
        throw new Error('데이터 가져오기 실패: ' + error.message)
      }
    }
  }
}


// import { useNuxtApp } from '#app'

// export const usePostApi = () => {
//   const axios = useNuxtApp().$axios

//   return {
//     fetchPosts: async () => {
//       try {
//         const response = await axios.get('/posts')
//         return response.data
//       } catch (error) {
//         throw new Error('데이터 가져오기 실패: ' + error.message)
//       }
//     },
//     fetchPost: async (id) => {
//       try {
//         if (!id) throw new Error('ID가 필요합니다')
//         const response = await axios.get(`/posts/${id}`)
//         return response.data
//       } catch (error) {
//         throw new Error('게시물 조회 실패: ' + error.message)
//       }
//     },
//     createPost: async (newPost) => {
//       try {
//         if (!newPost.title || !newPost.body) throw new Error('제목과 내용이 필요합니다')
//         const response = await axios.post('/posts', newPost)
//         return response.data
//       } catch (error) {
//         throw new Error('게시물 생성 실패: ' + error.message)
//       }
//     },
//     updatePost: async ({ id, ...data }) => {
//       try {
//         if (!id) throw new Error('ID가 필요합니다')
//         if (!data.title || !data.body) throw new Error('제목과 내용이 필요합니다')
//         const response = await axios.put(`/posts/${id}`, {
//           ...data,
//           id: Number(id)
//         })
//         return response.data
//       } catch (error) {
//         throw new Error('게시물 업데이트 실패: ' + error.message)
//       }
//     },
//     deletePost: async (id) => {
//       try {
//         if (!id) throw new Error('ID가 필요합니다')
//         const response = await axios.delete(`/posts/${id}`)
//         return response.data
//       } catch (error) {
//         throw new Error('게시물 삭제 실패: ' + error.message)
//       }
//     }
//   }
// }
