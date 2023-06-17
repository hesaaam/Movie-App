export const wordToPersian = (word) => {
  switch (word) {
    case 'Action':
      return 'اکشن'
    case 'Adventure':
      return 'ماجراجویی'
    case 'Animation':
      return 'انیمیشن'
    case 'Comedy':
      return 'کمدی'
    case 'Crime':
      return 'جنایی'
    case 'Documentary':
      return 'مستند'
    case 'Drama':
      return 'دارم'
    case 'Family':
      return 'خانوادگی'
    case 'Fantasy':
      return 'فانتزی'
    case 'History':
      return 'تاریخی'
    case 'Horror':
      return 'وحشت'
    case 'Music':
      return 'موسقی'
    case 'Mystery':
      return 'رازآلود'
    case 'Romance':
      return 'عاشقانه'
    case 'Science Fiction':
      return 'علمی تخیلی'
    case 'TV Movie':
      return 'فیلم تلویزیونی'
    case 'Thriller':
      return 'هیجان انگیز'
    case 'War':
      return 'جنگی'
    case 'Western':
      return 'وسترن'

    default:
      return '*'
  }
}

