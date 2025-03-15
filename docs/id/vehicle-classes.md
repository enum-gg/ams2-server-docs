<script setup>
    import { response as data } from './../dumps/vehicle_classes.json'
</script>

<style>
.selectable-group {
    user-select: all;
    font-family: monospace
}
</style>

# Vehicle Class IDs

{{ data.description }}

<table>
    <thead>
        <th style="width:100%">Name</th>
        <th>ID</th>
    </thead>
    <tbody>
        <tr v-for="(vehicleclass, index) in data.list" :key="index">
            <td>{{ vehicleclass.name }}</td>
            <td><Badge class="selectable-group" type="tip">{{ vehicleclass.value }}</Badge></td>
        </tr>
    </tbody>
</table>