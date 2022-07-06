<template>
    <div>
        <!-- 查询 -->
        <div>
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="商品名称">
                    <el-input v-model="selectData.title" placeholder="输入商品名称" />
                </el-form-item>
                <el-form-item label="商品ID">
                    <el-input v-model="selectData.id" placeholder="输入商品ID" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 列表 -->
        <div>
            <el-table :data="ListDataNew.comList" border style="width: 100%">
                <el-table-column prop="id" label="ID" width="180" />
                <el-table-column prop="title" label="商品名称" width="180" />
                <el-table-column prop="productPetails" label="商品详情" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default="scope">
                        <el-button
                        link
                        type="primary"
                        size="small"
                        @click.prevent="deleteRow(scope)"
                        >
                        删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="sizeChange" @current-change="currentChang" layout="prev, pager, next" :total="selectData.count" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent ,reactive ,toRefs} from 'vue'
import { IntiData } from '../type/index'
export default defineComponent({
    setup () {
        const IntiDataLIst = reactive(new IntiData())
        //自动添加表格数据
        function NewLIstIntiData(){
            for(var i=1;i<100;i++){
                IntiDataLIst.ListIntiData.push(
                    {
                        userId:i,
                        id:i,
                        title:'测试商品名称'+i,
                        productPetails:'测试商品描述'+i  
                    }
                )
            }
            IntiDataLIst.selectData.count= IntiDataLIst.ListIntiData.length
        }NewLIstIntiData()
        //分页
        const sizeChange = (size:number)=>{
            IntiDataLIst.selectData.size = size
        }
        const currentChang = (page:number)=>{
            IntiDataLIst.selectData.page = page

        }
        //自动分页
        const ListDataNew = reactive({
            comList:computed(()=>{
                // return 
                return IntiDataLIst.ListIntiData.slice(
                    (IntiDataLIst.selectData.page-1)*IntiDataLIst.selectData.size,
                    IntiDataLIst.selectData.page*IntiDataLIst.selectData.size
                )
            })
        })
        
        const deleteRow = (scope:object)=>{
            console.log(scope,'=========')
        }
        const onSubmit=()=>{
            console.log('查询')
        }
        return {...toRefs(IntiDataLIst),onSubmit,sizeChange,currentChang,ListDataNew,deleteRow}

    }
})
</script>

<style scoped>

</style>