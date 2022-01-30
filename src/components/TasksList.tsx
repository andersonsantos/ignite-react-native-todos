import React from "react";
import { FlatList } from "react-native";

import { ItemWrapper } from "./ItemWrapper";
import { TaskItem } from "./TaskItem";

import { EditTaskArgs } from "../pages/Home";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  editTask: ({ taskId, taskNewTitle }: EditTaskArgs) => boolean;
  removeTask: (id: number) => void;
}

export function TasksList({
  tasks,
  toggleTaskDone,
  editTask,
  removeTask,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem
              task={item}
              toggleTaskDone={toggleTaskDone}
              editTask={editTask}
              removeTask={removeTask}
            />
          </ItemWrapper>
        );
      }}
      style={{
        marginTop: 32,
      }}
    />
  );
}
