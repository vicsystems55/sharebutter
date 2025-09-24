<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'
import { useCalendarStore } from '@/views/apps/calendar/useCalendarStore'
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  event: {
    type: Object,
    required: false,
    default: null,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'addEvent',
  'updateEvent',
  'removeEvent',
])

const store = useCalendarStore()
const refForm = ref()

// 👉 Default blank event
const defaultEvent = () => ({
  title: '',
  start: null,
  end: null,
  allDay: false,
  url: '',
  extendedProps: {
    calendar: '',
    guests: [],
    location: '',
    description: '',
  },
})

// 👉 Event (safe init)
const event = ref(
  props.event
    ? JSON.parse(JSON.stringify(props.event))
    : defaultEvent()
)

// 👉 Reset event when drawer opens
const resetEvent = () => {
  event.value = props.event
    ? JSON.parse(JSON.stringify(props.event))
    : defaultEvent()

  nextTick(() => {
    refForm.value?.resetValidation()
  })
}

watch(() => props.isDrawerOpen, resetEvent)

// 👉 Remove Event
const removeEvent = () => {
  if (event.value?.id) {
    emit('removeEvent', String(event.value.id))
  }
  emit('update:isDrawerOpen', false)
}

// 👉 Submit
const handleSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      if ('id' in event.value) {
        emit('updateEvent', event.value)
      } else {
        emit('addEvent', event.value)
      }

      emit('update:isDrawerOpen', false)
    }
  })
}

// 👉 Guests options
const guestsOptions = [
  { avatar: avatar1, name: 'Jane Foster' },
  { avatar: avatar3, name: 'Donna Frank' },
  { avatar: avatar5, name: 'Gabrielle Robertson' },
  { avatar: avatar7, name: 'Lori Spears' },
  { avatar: avatar6, name: 'Sandy Vega' },
  { avatar: avatar2, name: 'Cheryl May' },
]

// 👉 Cancel
const onCancel = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    resetEvent()
    refForm.value?.resetValidation()
  })
}

// 👉 Date picker configs
const startDateTimePickerConfig = computed(() => {
  const config = {
    enableTime: !event.value.allDay,
    dateFormat: `Y-m-d${ event.value.allDay ? '' : ' H:i' }`,
  }

  if (event.value.end)
    config.maxDate = event.value.end

  return config
})

const endDateTimePickerConfig = computed(() => {
  const config = {
    enableTime: !event.value.allDay,
    dateFormat: `Y-m-d${ event.value.allDay ? '' : ' H:i' }`,
  }

  if (event.value.start)
    config.minDate = event.value.start

  return config
})

const dialogModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer
    data-allow-mismatch
    temporary
    location="end"
    :model-value="props.isDrawerOpen"
    width="370"
    :border="0"
    class="scrollable-content"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- 👉 Header -->
    <AppDrawerHeaderSection
      :title="event?.id ? 'Update Event' : 'Add Event'"
      @cancel="$emit('update:isDrawerOpen', false)"
    >
      <template #beforeClose>
        <IconBtn
          v-show="event?.id"
          @click="removeEvent"
        >
          <VIcon size="18" icon="tabler-trash" />
        </IconBtn>
      </template>
    </AppDrawerHeaderSection>

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- SECTION Form -->
          <VForm ref="refForm" @submit.prevent="handleSubmit">
            <VRow>
              <!-- 👉 Title -->
              <VCol cols="12">
                <AppTextField
                  id="event-title"
                  v-model="event.title"
                  label="Title"
                  placeholder="Meeting with Jane"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- 👉 Calendar -->
              <VCol cols="12">
                <AppSelect
                  id="event-label"
                  v-model="event.extendedProps.calendar"
                  label="Label"
                  placeholder="Select Event Label"
                  :rules="[requiredValidator]"
                  :items="store.availableCalendars"
                  :item-title="item => item.label"
                  :item-value="item => item.label"
                >
                  <template #selection="{ item }">
                    <div
                      v-show="event.extendedProps.calendar"
                      class="align-center"
                      :class="event.extendedProps.calendar ? 'd-flex' : ''"
                    >
                      <VIcon
                        :color="item.raw.color"
                        icon="tabler-circle-filled"
                        size="8"
                        class="me-2"
                      />
                      <span>{{ item.raw.label }}</span>
                    </div>
                  </template>

                  <template #item="{ item, props: itemProps }">
                    <VListItem v-bind="itemProps">
                      <template #prepend>
                        <VIcon
                          size="8"
                          icon="tabler-circle-filled"
                          :color="item.raw.color"
                        />
                      </template>
                    </VListItem>
                  </template>
                </AppSelect>
              </VCol>

              <!-- 👉 Start date -->
              <VCol cols="12">
                <AppDateTimePicker
                  id="event-start-date"
                  :key="JSON.stringify(startDateTimePickerConfig)"
                  v-model="event.start"
                  :rules="[requiredValidator]"
                  label="Start date"
                  placeholder="Select Date"
                  :config="startDateTimePickerConfig"
                />
              </VCol>

              <!-- 👉 End date -->
              <VCol cols="12">
                <AppDateTimePicker
                  id="event-end-date"
                  :key="JSON.stringify(endDateTimePickerConfig)"
                  v-model="event.end"
                  :rules="[requiredValidator]"
                  label="End date"
                  placeholder="Select End Date"
                  :config="endDateTimePickerConfig"
                />
              </VCol>

              <!-- 👉 All day -->
              <VCol cols="12">
                <VSwitch
                  id="event-all-day"
                  v-model="event.allDay"
                  label="All day"
                />
              </VCol>

              <!-- 👉 Event URL -->
              <VCol cols="12">
                <AppTextField
                  id="event-url"
                  v-model="event.url"
                  label="Event URL"
                  placeholder="https://event.com/meeting"
                  :rules="[urlValidator]"
                  type="url"
                />
              </VCol>

              <!-- 👉 Guests -->
              <VCol cols="12">
                <AppSelect
                  id="event-guests"
                  v-model="event.extendedProps.guests"
                  label="Guests"
                  placeholder="Select guests"
                  :items="guestsOptions"
                  :item-title="item => item.name"
                  :item-value="item => item.name"
                  chips
                  multiple
                  eager
                />
              </VCol>

              <!-- 👉 Location -->
              <VCol cols="12">
                <AppTextField
                  id="event-location"
                  v-model="event.extendedProps.location"
                  label="Location"
                  placeholder="Meeting room"
                />
              </VCol>

              <!-- 👉 Description -->
              <VCol cols="12">
                <AppTextarea
                  id="event-description"
                  v-model="event.extendedProps.description"
                  label="Description"
                  placeholder="Meeting description"
                />
              </VCol>

              <!-- 👉 Form buttons -->
              <VCol cols="12">
                <VBtn type="submit" class="me-3"> Submit </VBtn>
                <VBtn variant="outlined" color="secondary" @click="onCancel">
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
          <!-- !SECTION -->
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
