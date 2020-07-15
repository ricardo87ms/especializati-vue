const getters = {
  sortedTasks(state) {
    let tasks = state.tasks;
    return tasks.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

      return 0;
    });
  },
  tasksNotCompleted(state) {
    let tasks = state.tasks;

    return tasks.filter((task) => {
      return !task.completed;
    });
  },
};

export default getters;
