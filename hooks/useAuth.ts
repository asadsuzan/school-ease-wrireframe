

    // useAuth hook for handling authentication
    const logOut = () => {
        // logout logic here
      window.location.href = '/login'
    }

    const useAuth = () => {
      return {
      logOut,
    }}

    export default useAuth