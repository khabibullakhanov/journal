export const reStudent = (state = {}, action) => {
  switch (action.type) {
    case "STUDENT":
      return action.user;
      
    default:
      return state;
  }
};

export const acStudent = (user) => {
  return {
    type: "STUDENT",
    user,
  };
};