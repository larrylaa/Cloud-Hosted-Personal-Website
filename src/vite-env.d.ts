/// <reference types="vite/client" />

// Allow importing CSS files from npm packages
declare module "swiper/css" {
  const content: string;
  export default content;
}
declare module "swiper/css/navigation" {
  const content: string;
  export default content;
}
declare module "swiper/css/pagination" {
  const content: string;
  export default content;
}
