<script setup>
import { data } from './vehicle.data.js'
import { data as vehicle_classes } from './vehicle-classes.data.js'

const lookup = vehicle_classes.list.reduce((acc, item) => {
    acc[item.name] = item.value;
    return acc;
}, {});
</script>

<style>
.selectable-group {
    user-select: all;
    font-family: monospace
}
</style>

# Vehicle IDs

{{ data.description }}

<table>
    <thead>
        <th style="width:50%">Vehicle</th>
        <th style="width:30%">Class</th>
    </thead>
    <tbody>
        <tr v-for="(vehicle, index) in data.list" :key="index">
            <td><Badge class="selectable-group" type="tip">{{ vehicle.id }}</Badge> {{ vehicle.name }}</td>
            <td><Badge class="selectable-group" type="info">{{ lookup[vehicle.class] }}</Badge> {{ vehicle.class }}</td>
        </tr>
    </tbody>
</table>