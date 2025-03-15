<script setup>
import { response as data } from './../dumps/tracks.json'
</script>

<style>
.selectable-group {
    user-select: all;
    font-family: monospace
}
</style>

# Track IDs

{{ data.description }}

<table>
    <thead>
        <th style="width:100%">Name</th>
        <th>ID</th>
        <th>Grid Size</th>
        <th>Default Date</th>
        <th>Month</th>
        <th>Year</th>
    </thead>
    <tbody>
        <tr v-for="(track, index) in data.list" :key="index">
            <td>{{ track.name }}</td>
            <td><Badge class="selectable-group" type="tip">{{ track.id }}</Badge></td>
            <td>{{ track.gridsize }}</td>
            <td>{{ track.default_day }}</td>
            <td>{{ track.default_month }}</td>
            <td>{{ track.default_year }}</td>
        </tr>
    </tbody>
</table>