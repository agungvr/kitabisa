export const formatIDR = value => {
  if (!value) {
    return 'Rp. 0'
  }
  return `Rp. ${parseInt(value, 10).toLocaleString(
    'de-DE',
    'minimumFractionDigits',
    2
  )}`
}

export const sortBy = (data, by) => {
  const list = [...data]
  return list.sort((a, b) => (a[by] > b[by] ? 1 : -1))
}
