export const get_nth_suffix = (day) => {
    switch (day) {
      case 1:
      case 21:
      case 31:
         return day+'st';
      case 2:
      case 22:
         return day+'nd';
      case 3:
      case 23:
         return day+'rd';
      default:
         return day+'th';
    }
  }