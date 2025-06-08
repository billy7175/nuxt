import { VueQueryPlugin } from "@tanstack/vue-query";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, // 5분 동안 데이터 신선
          cacheTime: 1000 * 60 * 10, // 10분 캐시 유지
          refetchOnWindowFocus: false, // 창 포커스 시 리페치 비활성화
        },
      },
    },
  });
});
