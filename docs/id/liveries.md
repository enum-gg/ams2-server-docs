<script setup>
    import { data } from './liveries.data.js'
</script>

<style scoped>
.selectable-group {
    user-select: all;
    font-family: monospace
}
</style>

# Livery IDs

{{ data.description }}

<table style="width:100%;">
    <thead>
        <th>Vehicle</th>
        <th>Vehicle ID</th>
        <th>Liveries</th>
    </thead>
    <tbody>
        <tr v-for="(vehicle, index) in data.list" :key="index">
            <td style="width:20%; word-wrap: break-word">{{ vehicle.name }}</td>
            <td class="selectable-group" style="width:20%"><Badge class="selectable-group" type="info">{{ vehicle.id }}</Badge></td>
            <td style="width:40%">
                <!--
                <table style="display:table; width:100%;">
                    <thead>
                        <th>Name</th>
                        <th>ID</th>
                    </thead>
                    <tbody style="width:100%">
                        <tr v-for="(livery, index) in vehicle.liveries" :key="id">
                            <td style="width:70%;">{{ livery.name }}</td>
                            <td class="selectable-group" style="width:30%;"><Badge class="selectable-group" type="tip">{{ livery.id }}</Badge></td>
                        </tr>
                    </tbody>-->
                <!--<span class="selectable-group">{{ vehicle.liveries }}</span>-->
                <!--</table>
            -->
                    <span v-for="(livery, index) in vehicle.liveries" :key="id">
                    <Badge class="selectable-group" type="tip">{{ livery.id }}</Badge>{{ livery.name }} <br />
                </span>
            </td>
        </tr>
    </tbody>
</table>