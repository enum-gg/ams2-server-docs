<script setup>
import { response as api } from './../dumps/help.json'

const details = api
</script>

<style>
.selectable-group {
    user-select: all;
    font-family: monospace
}
</style>

# Endpoints

<table style="width:100%;">
    <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Access</th>
        <th>Response Type</th>
        <th>Parameters</th>
    </thead>
    <tbody>
        <tr v-for="(enum_item, index) in details.methods" :key="index">
            <td><span style="font-family: monospace;">{{ enum_item.name }}</span></td>
            <td>{{ enum_item.description }}</td>
            <td>{{ enum_item.access }}</td>
            <td>{{ enum_item.responsetype }}</td>
            <td>
                <span v-for="(enum_item, index) in enum_item.parameters" style="font-family: monospace;">{{ enum_item }}<br /></span>
            </td>
        </tr>
    </tbody>
</table>