
    const activities = {
        '2025-01-03': 'Meeting with the team at 10:00 AM.',
        '2025-01-04': 'Project deadline for client.',
        '2025-01-05': 'Family gathering at 6:00 PM.',
        '2026-01-05': 'Family gathering at 6:00 PM.',
    };

    const calendar = document.getElementById('calendar');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.getElementById('modal-close');
    const monthYearDisplay = document.getElementById('month-year');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();

    function renderCalendar() {
        calendar.innerHTML = '';
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        monthYearDisplay.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            calendar.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.textContent = day;

            if (activities[date]) {
                dayDiv.classList.add('event');
            }

            dayDiv.addEventListener('click', () => {
                modalText.textContent = activities[date] || 'Aucune activité en ce jour.';
                modal.style.display = 'flex';
            });
            calendar.appendChild(dayDiv);
        }
    }

    prevMonthButton.addEventListener('click', () => {
        if (currentDate.getFullYear() > 2025 || (currentDate.getFullYear() === 2025 && currentDate.getMonth() > 0)) {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        }
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    renderCalendar();