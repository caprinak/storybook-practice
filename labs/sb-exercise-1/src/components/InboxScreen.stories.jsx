import { InboxScreen } from './InboxScreen';
import * as TaskListStories from './TaskList.stories';

export default {
  component: InboxScreen,
  title: 'Tutorial/InboxScreen',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    tasks: TaskListStories.Default.args.tasks,
  },
};

export const Error = {
  args: {
    ...Default.args,
    error: 'Something went wrong',
  },
};

export const Empty = {
  args: {
    ...Default.args,
    tasks: [],
  },
};

export const Loading = {
  args: {
      ...Default.args,
      tasks: [],
      loading: true, // This will be passed to TaskList via prop drilling
  }
}
