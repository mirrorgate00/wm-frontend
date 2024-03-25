<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5 text-uppercase">Login</h2>
        <div class="card my-5">
          <form class="card-body cardbody-color p-lg-5">
            <div class="text-center"></div>

            <div class="mb-3">
              <input
                type="email"
                autocomplete="email"
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-color px-5 mt-3 mb-5 w-50">
                Log in
              </button>
            </div>
            <div id="emailHelp" class="form-text text-center mb-1 text-dark">
              Not Registered?
              <router-link class="text-dark fw-bold" to="/signup">
                Sign Up
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.btn-color {
  background-color: #0e1c36;
  color: #fff;
}

.cardbody-color {
  background-color: #ebf2fa;
}
</style>
