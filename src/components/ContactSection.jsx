import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, User, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast'; 

// InputField tetap di LUAR
const InputField = ({ id, label, value, onChange, type = "text", icon: Icon, isTextArea = false, focusedField, setFocusedField }) => (
  <div className="relative group mt-2">
    <div className={`absolute left-4 top-4 text-gray-400 transition-colors duration-300 ${focusedField === id ? 'text-cyan-400' : ''}`}>
      <Icon size={20} />
    </div>
    
    {isTextArea ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={() => setFocusedField(id)}
        onBlur={() => setFocusedField(null)}
        required
        rows={5}
        className={`w-full bg-slate-900/50 text-white pl-12 pr-4 py-4 rounded-xl border-2 outline-none transition-all duration-300 resize-none
          ${focusedField === id 
            ? 'border-cyan-500' 
            : 'border-white/10 hover:border-white/20'
          }`}
        placeholder=" " 
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={() => setFocusedField(id)}
        onBlur={() => setFocusedField(null)}
        required
        className={`w-full bg-slate-900/50 text-white pl-12 pr-4 py-4 rounded-xl border-2 outline-none transition-all duration-300
          ${focusedField === id 
            ? 'border-cyan-500' 
            : 'border-white/10 hover:border-white/20'
          }`}
        placeholder=" "
      />
    )}
    
    <label
      htmlFor={id}
      className={`absolute left-12 transition-all duration-300 ease-in-out pointer-events-none bg-slate-900 px-2 rounded
        ${(focusedField === id || value) 
          ? '-top-3 text-xs text-cyan-400 font-medium'
          : 'top-4 text-gray-400 text-base'
        }`}
    >
      {label}
    </label>
  </div>
);

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/maqdergo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          variant: "success",
          title: "Message Sent! 🚀",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          variant: "destructive",
          title: "Oops!",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          
          {/* Left Column: Text & Info */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Together</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="flex flex-col gap-6 items-center lg:items-start">
              {/* Email Block - PERBAIKAN: Background dihapus, Icon diperbesar */}
              <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300 bg-white/5 p-4 rounded-xl border border-white/10 w-full lg:w-auto">
                <Mail className="text-cyan-400" size={32} />
                <div className="text-left">
                  <p className="text-sm text-gray-500">Email Me</p>
                  <a href="mailto:contact@itsabil.my.id" className="font-medium text-lg">contact@itsabil.my.id</a>
                </div>
              </div>

              {/* Location Block - PERBAIKAN: Background dihapus, Icon diperbesar */}
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/10 w-full lg:w-auto">
                <MapPin className="text-purple-400" size={32} />
                <div className="text-left">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-lg">Malang, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden group"
          >
            <div className="space-y-6">
              <InputField 
                id="name" 
                label="Your Name" 
                icon={User} 
                value={formData.name}
                onChange={handleChange}
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />
              <InputField 
                id="email" 
                label="Your Email" 
                type="email" 
                icon={Mail} 
                value={formData.email}
                onChange={handleChange}
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />
              <InputField 
                id="message" 
                label="Your Message" 
                icon={Send} 
                isTextArea={true} 
                value={formData.message}
                onChange={handleChange}
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group-hover:scale-[1.01] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;