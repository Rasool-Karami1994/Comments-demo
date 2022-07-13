import http from "./httpService";
export function deleteComment(seletedComment) {
  return http.delete(`/comments/${seletedComment}`);
}
