<template>
  <div>
    <!-- 로딩 중 -->
    <p v-if="postsQuery.isLoading.value" class="text-blue-500">로딩 중입니다...</p>
    <!-- 에러 발생 -->
    <p v-else-if="postsQuery.error.value" class="text-red-500">
      오류 발생: {{ postsQuery.error.value.message }}
    </p>
    <!-- 데이터 표시 -->
    <div v-else-if="postsQuery.data?.value?.length > 0">
      <ul class="space-y-2">
        <li
          v-for="post in postsQuery.data.value"
          :key="post.id"
          class="p-2 border rounded"
        >
          {{ post.title }}
        </li>
      </ul>
    </div>
    <p v-else class="text-gray-500">데이터가 없습니다.</p>
  </div>
</template>

<script setup>
import { usePosts } from "~/composables/usePosts";
const { fetchPosts } = usePosts();
const postsQuery = fetchPosts();
</script>
