export default function({store, redirect, route}) {
  const userIsLoggedIn = store.state.auth.user
  const urlRequiredAuth = /^\/dashboard(\/|$)/.test(route.fullPath)
  const urlRequiredNonAuth = /^\/signin(\/|$)|^(\/|$)|^\/register(\/|$)/.test(route.fullPath)

  if (!userIsLoggedIn && urlRequiredAuth) {
    console.log('isloggedIn', userIsLoggedIn)
    console.log('dashboard', urlRequiredAuth)
    return redirect('/signin')
  }

  if (userIsLoggedIn && urlRequiredNonAuth) {
    return redirect('/dashboard')
  }

  return Promise.resolve()
}