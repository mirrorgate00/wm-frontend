<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5 text-uppercase">
          Регистрация товара
        </h2>
        <div class="card my-5">
          <form class="card-body cardbody-color p-sm-5">
            <div class="text-center"></div>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <label for="firstname" class="mb-1">Название товара</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  placeholder="Название"
                />
              </div>
              <div class="col-sm-6 mb-3">
                <label for="checkname" class="mb-1">
                  Название товара в чеке
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="checkname"
                  placeholder="Название в чеке"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <label for="stock-keeping-unit" class="mb-1">Артикул</label>
                <input
                  type="text"
                  class="form-control"
                  id="stock-keeping-unit"
                  placeholder="Артикул"
                />
              </div>
              <div class="col-sm-6 mb-3">
                <label for="category" class="mb-1">Категория</label>
                <input
                  type="text"
                  class="form-control"
                  id="category"
                  placeholder="Категория"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <label for="amount" class="mb-1">Количество</label>
                <input
                  type="number"
                  class="form-control"
                  id="amount"
                  min="0"
                  placeholder="Введите количество"
                />
              </div>
              <div class="col-sm-6 mb-3">
                <label for="select-unit" class="mb-1">Единицы измерения</label>
                <select
                  class="form-select"
                  id="select-units"
                  aria-label="Select units"
                >
                  <option value="0" selected>Граммы</option>
                  <option value="1">Килограммы</option>
                  <option value="2">Штуки</option>
                  <option value="3">Другое</option>
                </select>
              </div>
            </div>
            <div class="form-check form-switch mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                name="expiration-date"
                id="expiration-date"
                v-model="expDateIsShown"
              />
              <label class="form-check-label" for="expiration-date">
                Срок годности
              </label>
            </div>

            <div v-show="expDateIsShown" class="row">
              <div class="col-sm-6 mb-3">
                <label for="production-date" class="mb-1">
                  Дата изготовления
                </label>
                <input type="date" class="form-control" id="production-date" />
              </div>
              <div class="col-sm-6 mb-3">
                <label for="best-before-date" class="mb-1">Годен до</label>
                <input type="date" class="form-control" id="best-before-date" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <label for="sell-price" class="mb-1">Цена продажи</label>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    id="sell-price"
                    min="0"
                    placeholder="Цена продажи"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">&#x20BD;</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mb-3">
                <label for="purchase-price" class="mb-1">Цена закупки</label>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    id="purchase-price"
                    min="0"
                    placeholder="Цена закупки"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">&#x20BD;</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-color px-5 mt-3 mb-1 w-50">
                Добавить товар
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const expDateIsShown = ref(true)
</script>

<style scoped>
#stock-keeping-unit {
  text-transform: uppercase;
}

.btn-color {
  background-color: #0e1c36;
  color: #fff;
}

.cardbody-color {
  background-color: #ebf2fa;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
