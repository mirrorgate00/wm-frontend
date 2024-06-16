<template>
  <table class="tg">
    <thead>
      <tr>
        <th class="tg-baqh">ID</th>
        <th class="tg-baqh">Название товара</th>
        <th class="tg-0lax">Название товара в чеке</th>
        <th class="tg-0lax">Артикул</th>
        <th class="tg-0lax">Категория</th>
        <th class="tg-0lax">Количество</th>
        <th class="tg-0lax">Единицы измерения</th>
        <th class="tg-0lax">Дата изготовления</th>
        <th class="tg-0lax">Годен до</th>
        <th class="tg-0lax">Цена продажи</th>
        <th class="tg-0lax">Цена закупки</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-0lax">{{ store.$state.searchData[0] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[1] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[2] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[3] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[4] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[5] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[6] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[7] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[8] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[9] }}</td>
        <td class="tg-0lax">{{ store.$state.searchData[10] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useSearchDataStore } from '@/stores/SearchData'

const store = useSearchDataStore()
</script>
<style type="text/css">
.tg {
  border-collapse: collapse;
  border-color: #93a1a1;
  border-spacing: 0;
}
.tg td {
  background-color: #fdf6e3;
  border-color: #93a1a1;
  border-style: solid;
  border-width: 1px;
  color: #002b36;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  background-color: #657b83;
  border-color: #93a1a1;
  border-style: solid;
  border-width: 1px;
  color: #fdf6e3;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-baqh {
  text-align: center;
  vertical-align: top;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
