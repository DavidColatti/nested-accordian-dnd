import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = ({ taskList }) => {
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    console.log(result);
  }

  return (
    <ul>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="taskList" type="task">
          {(provided) => (
            <div ref={provided.innerRef}>
              {taskList?.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="parent-task"
                    >
                      <span {...provided.dragHandleProps}>DRAG MAIN TASK</span>
                      <Task item={item} key={index} idx={index} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </ul>
  );
};

export default TaskList;
