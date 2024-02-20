import '..dummyData.json/'
export const fetchDataFromJsonFile = async () => {
    try {
      // const jobDummyData = require('../../jobDummyData.json');
      const jobDummyData = require('..dummyData.json/');
      // console.log("Data:", jobDummyData.TEMP_DUMMY_DATA.hits);
      return jobDummyData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };