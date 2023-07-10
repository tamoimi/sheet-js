import XLSX from "xlsx";

const excelDownload = ({ thead, tableData, sheetName, fileName }) => {
  // 1. 시트 데이터로 변환

  const sheetData = [thead, ...tableData.map(obj => Object.values(obj))];
  console.log("sheetData", sheetData)

  // 2. excel workbook 만들기
  const workbook = XLSX.utils.book_new();

  // 3. 생성한 워크북에 시트 데이터를 넣고 sheetName을 지정한다.
  const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // 4. 해당 워크북에 지정한 파일이름으로 파일을 생성한다.
  XLSX.writeFile(workbook, fileName);
};

export default excelDownload;
