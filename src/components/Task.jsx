import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Task = ({ item, idx }) => {
  const [toggle, setToggle] = useState(false);

  function onBtnClick() {
    setToggle(!toggle);
  }

  return (
    <li id={idx}>
      <Accordion expanded={toggle} onChange={onBtnClick}>
        <AccordionSummary
          expandIcon={<i>{">"}</i>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div>
            <h2>{item.item_name}</h2>
            <span>{item.date}</span>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <section>
            <p>{item.description}</p>

            {item.sub_task?.length > 0 && (
              <Droppable droppableId={`sub${item.id}`} type="subTask">
                {(provided) => (
                  <div ref={provided.innerRef}>
                    {item.sub_task.map((item, index) => {
                      return (
                        <Draggable
                          key={index}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className="subtask"
                            >
                              <span {...provided.dragHandleProps}>
                                DRAG SUB-TASK
                              </span>
                              <Task key={index} item={item} idx={index} />
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
          </section>
        </AccordionDetails>
      </Accordion>
    </li>
  );
};

export default Task;
