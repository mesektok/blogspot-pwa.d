// main.js

// PWA 기능을 위한 서비스 워커 등록
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered successfully:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// 페이지 로드 시 실행될 함수
document.addEventListener('DOMContentLoaded', () => {
  // 여기에 페이지 초기화 코드를 작성합니다.
  console.log('Page loaded');
});

// 추가적인 기능 구현
function exampleFunction() {
  console.log('This is an example function');
}