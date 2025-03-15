<script setup>
import { response as enums } from './../dumps/enums.json'

const damage = enums.damage
const damage_scale = enums.damage_scale
</script>

<style>
    .selectable-group {
        user-select: all;
        font-family: monospace
    }
</style>

# Damage

{{ damage.description }}

<table>
    <thead>
        <th style="width:100%">Name</th>
        <th>ID</th>
    </thead>
    <tbody>
        <tr v-for="(enum_item, index) in damage.list" :key="index">
            <td>{{ enum_item.name }}</td>
            <td><Badge class="selectable-group" type="tip">{{ enum_item.value }}</Badge></td>
        </tr>
    </tbody>
</table>

---

# Damage Scale

{{ damage_scale.description }}

<table>
    <thead>
        <th style="width:100%">Name</th>
        <th>ID</th>
    </thead>
    <tbody>
        <tr v-for="(enum_item, index) in damage_scale.list" :key="index">
            <td>{{ enum_item.name }}</td>
            <td><Badge class="selectable-group" type="tip">{{ enum_item.value }}</Badge></td>
        </tr>
    </tbody>
</table>