<template>
  <div>
    <h1>Calendar</h1>
    <p>Visual scheduler for upcoming and past posts.</p>

    <div class="card">
      <div class="row">
        <div class="col add-event-section">
          <button @click="showModal = true" class="add-event-button">Add Event</button>
          <div id="small-calendar"></div>
        </div>
        <div class="col calendar-section">
          <div id="calendar"></div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="showModal = false">&times;</span>
        <h2>Add Event</h2>
        <form @submit.prevent="addEvent">
          <div>
            <label for="eventTitle">Event Title</label>
            <input type="text" id="eventTitle" v-model="newEvent.title" required />
          </div>
          <div>
            <label for="eventStart">Start Date</label>
            <input type="datetime-local" id="eventStart" v-model="newEvent.start" required />
          </div>
          <div>
            <label for="eventEnd">End Date</label>
            <input type="datetime-local" id="eventEnd" v-model="newEvent.end" />
          </div>
          <div>
            <label for="eventColor">Event Color</label>
            <input type="color" id="eventColor" v-model="newEvent.color" />
          </div>
          <button type="submit">Add Event</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

export default {
  data() {
    return {
      calendar: null,
      smallCalendar: null,
      showModal: false,
      newEvent: {
        title: '',
        start: '',
        end: '',
        color: '#007BB6',
      },
    };
  },
  mounted() {
    const calendarEl = document.getElementById('calendar');
    this.calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      },
      events: [
        {
          title: 'Business Meeting',
          start: '2025-07-14T10:30:00',
          end: '2025-07-14T12:30:00',
          color: '#007BB6',
        },
        {
          title: 'Conference',
          start: '2025-07-15',
          end: '2025-07-17',
          color: '#55ACEE',
        },
        {
          title: 'Holiday',
          start: '2025-07-20',
          color: '#28a745',
        },
      ],
    });
    this.calendar.render();

    const smallCalendarEl = document.getElementById('small-calendar');
    this.smallCalendar = new Calendar(smallCalendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: false,
    });
    this.smallCalendar.render();
  },
  methods: {
    addEvent() {
      this.calendar.addEvent(this.newEvent);
      this.newEvent = {
        title: '',
        start: '',
        end: '',
        color: '#007BB6',
      };
      this.showModal = false;
    },
  },
};
</script>

<style>
#calendar {
  margin-block: 0;
  margin-inline: auto;
  max-inline-size: 900px;
}

.card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 10%);
  margin-block-end: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col {
  flex: 1;
  margin-inline: 10px;
}

.add-event-button {
  border: none;
  border-radius: 4px;
  background-color: #007bb6;
  color: white;
  cursor: pointer;
  padding-block: 10px;
  padding-inline: 15px;
}

.add-event-button:hover {
  background-color: #005f8a;
}

.modal {
  position: fixed;
  padding: 20px;
  background-color: white;
  block-size: 100%;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 50%);
  inline-size: 300px;
  inset-block-start: 0;
  inset-inline-end: 0;
  overflow-y: auto;
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.close {
  position: absolute;
  cursor: pointer;
  font-size: 1.5rem;
  inset-block-start: 10px;
  inset-inline-end: 10px;
}
</style>
