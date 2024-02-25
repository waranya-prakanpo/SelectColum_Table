import datacolum from './datacolum.json';
export const NodeService = {
    getTreeNodesDatacolum() {
        // สร้างโครงสร้างข้อมูลต้นไม้ตามโครงสร้างที่กำหนด
        const treeNodes = datacolum.map((item, index) => ({
            key: `${index}`,
            label: item.name, // ใช้ name จาก data.json เป็น label
            datacolum: `${item.name} Folder`, // ใช้ name จาก data.json เป็นข้อมูล
            icon: 'pi pi-fw pi-calendar', // กำหนดไอคอนตามต้องการ
            children: item.columns.map((column, i) => ({
                key: `${index}-${i}`,
                label: column, // ใช้ column จาก data.json เป็น label ของ children
                icon: 'pi pi-fw pi-calendar-plus', // กำหนดไอคอนตามต้องการ
                datacolum: column // ใช้ column จาก data.json เป็นข้อมูลของ children
            }))
        }));

        return treeNodes;
    },

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesDatacolum());
    }
};