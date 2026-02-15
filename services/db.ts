
import { supabase } from '../supabase';

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
}

/**
 * Save the appointment (Public access)
 */
export const saveAppointment = async (data: AppointmentData) => {
  const { data: response, error } = await supabase
    .from('appointments')
    .insert([
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        service: data.service,
        date: data.date,
      },
    ]);

  if (error) {
    console.error('Supabase DB Error:', error);
    throw error;
  }

  return response;
};
