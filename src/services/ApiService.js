export default class ApiService {
  static showBackDrop = (show, transparent) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let backDrop = {
          show: show,
          transparent: transparent
        };
        resolve(backDrop);
      }, 3000)
    });
  }
}