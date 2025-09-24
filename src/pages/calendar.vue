<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { useCalendarStore } from '@/views/apps/calendar/useCalendarStore'
import CalendarDrawer from './CalendarDrawer.vue'

const store = useCalendarStore()

const isDrawerOpen = ref(false)
const selectedEvent = ref(null)

const handleDateClick = info => {
  selectedEvent.value = {
    title: '',
    start: info.dateStr,
    end: info.dateStr,
    allDay: true,
    extendedProps: {
      calendar: 'Personal',
      description: '',
      location: '',
      guests: [],
    },
  }
  isDrawerOpen.value = true
}

const handleEventClick = info => {
  selectedEvent.value = { ...info.event.extendedProps, ...info.event.toPlainObject() }
  isDrawerOpen.value = true
}

const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  },
  events: store.events,
  editable: true,
  selectable: true,
  dateClick: handleDateClick,
  eventClick: handleEventClick,
  height: 'auto',
  aspectRatio: 1.6,

  // 👇 Render events as badges
  eventContent: arg => {
    return {
      html: `
        <span class="event-badge ${arg.event.extendedProps.calendar}">
          ${arg.event.title}
        </span>
      `,
    }
  },
}))
</script>

<template>
  <VCard class="h-100">
    <VCardTitle class="text-h5">
      Calendar
    </VCardTitle>
    <VCardText>
      <div class="calendar-wrapper">
        <FullCalendar :options="calendarOptions" />
      </div>
    </VCardText>
  </VCard>

  <CalendarDrawer
    v-model:is-drawer-open="isDrawerOpen"
    :event="selectedEvent"
    @add-event="store.addEvent"
    @update-event="store.updateEvent"
    @remove-event="store.removeEvent"
  />
</template>

<style scoped>
.calendar-wrapper {
  width: 100%;
  overflow-x: auto;
}

:deep(.fc) {
  font-size: 0.85rem;
}

:deep(.event-badge) {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

/* Different badge colors per calendar type */
:deep(.event-badge.Personal) {
  background-color: #1976d2; /* Vuetify primary */
}
:deep(.event-badge.Work) {
  background-color: #2e7d32; /* green */
}
:deep(.event-badge.Reminder) {
  background-color: #fbc02d; /* yellow */
  color: black;
}
:deep(.event-badge.Social) {
  background-color: #d32f2f; /* red */
}
</style>
