<script setup>
    import { data } from './session.data.js'
</script>

<style>
    .selectable-group {
        user-select: all;
        font-family: monospace
    }
</style>

# Session Flags

{{ data.description }}

<table>
    <thead>
        <th style="width:100%">Name</th>
        <th>ID</th>
    </thead>
    <tbody>
        <tr v-for="(flag, index) in data.list" :key="index">
            <td>{{ flag.name }}</td>
            <td><Badge class="selectable-group" type="tip">{{ flag.value }}</Badge></td>
        </tr>
    </tbody>
</table>