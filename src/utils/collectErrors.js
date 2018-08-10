import groupBy from 'lodash.groupby';

export default function collectErrors(error) {
  if (error !== null) {
    return groupBy(error.details, detail => {
      let res = detail.path;
      if (Array.isArray(res) && res.length > 0) {
        res = res[0];
      }
      return res;
    });
  }
  return {};
}
