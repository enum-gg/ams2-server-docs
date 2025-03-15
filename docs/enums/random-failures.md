<script setup>
import { response as enums } from './../dumps/enums.json'

const details = enums.random_failures
</script>

<style>
.selectable-group {
    user-select: all;
    font-family: monospace
}
</style>

# Random Failures

{{ details.description }}

<table>
    <thead>
        <th style="width:100%">Name</th>
        <th>ID</th>
    </thead>
    <tbody>
        <tr v-for="(enum_item, index) in details.list" :key="index">
            <td>{{ enum_item.name }}</td>
            <td><Badge class="selectable-group" type="tip">{{ enum_item.value }}</Badge></td>
        </tr>
    </tbody>
</table>