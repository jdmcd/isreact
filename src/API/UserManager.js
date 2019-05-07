const UserManager = {
    login(token) {
      localStorage.setItem('token', token);
    },
    getToken() {
      return localStorage.getItem('token');
    },
    isLoggedIn() {
      return this.getToken() != null;
    },
    logout() {
      localStorage.removeItem('token');
    }
  };
  
  export default UserManager;
  