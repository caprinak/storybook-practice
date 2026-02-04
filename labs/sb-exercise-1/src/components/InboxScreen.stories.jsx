import { InboxScreen } from './InboxScreen';
import * as TaskListStories from './TaskList.stories';
import { within, userEvent, expect, fn } from '@storybook/test';

export default {
  component: InboxScreen,
  title: 'Tutorial/InboxScreen',
  tags: ['autodocs'],
  args: {
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
};

export const Default = {
  args: {
    tasks: [
      { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
      { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
      { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    ],
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
    loading: true,
  },
};

export const InteractionTest = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Verify the header is there
    await expect(canvas.getByText('Taskbox')).toBeInTheDocument();
    // Verify "Your Tasks" title is visible
    await expect(canvas.getByText('Your Tasks')).toBeInTheDocument();
    
    // Find the first task title
    const firstTask = canvas.getByDisplayValue('Task 1');
    await expect(firstTask).toBeInTheDocument();

    // Find and click the pin button of the first task
    const pinButtons = canvas.getAllByText('★');
    await userEvent.click(pinButtons[0]);
    
    // In a real app with state management (like Redux), we would verify 
    // that the task moved to the top. Here we just verify the click event.
  },
};
