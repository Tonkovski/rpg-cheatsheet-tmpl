// Wait for DOM to load
document.addEventListener('DOMContentLoaded', async function() {
    const tbody = document.querySelector('#cheatsheet-table tbody');

    // Fetch labels
    const labelsResponse = await fetch('labels.json');
    const labels = await labelsResponse.json();

    // Fetch CSV
    const csvResponse = await fetch('cheatsheet.csv');
    const csvText = await csvResponse.text();
    const parsed = Papa.parse(csvText, {header: true});
    const items = parsed.data.map(row => ({
        id: row.id,
        priority: row.priority,
        labels: row.labels ? row.labels.split(',') : [],
        text: row.text,
        pic: row.pic
    }));

    // Load ticked items
    const tickedItems = $.jStorage.get('tickedItems', []);

    // Build table
    items.forEach(item => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-id', item.id);
        const isTicked = tickedItems.includes(item.id);
        if (isTicked) {
            tr.classList.add('ticked');
        }

        // Tick TD
        const tickTd = document.createElement('td');
        tickTd.textContent = isTicked ? '✓' : '';
        tr.appendChild(tickTd);

        // Pic TD
        const picTd = document.createElement('td');
        picTd.className = 'center';
        if (item.pic) {
            const picLink = document.createElement('a');
            picLink.href = item.pic;
            picLink.target = '_blank';
            picLink.textContent = '👁️';
            picLink.title = 'View full image';
            picTd.appendChild(picLink);
        }
        tr.appendChild(picTd);

        // Priority TD
        const priTd = document.createElement('td');
        priTd.className = 'center';
        const priMap = {l: 'LOW', m: 'MEDIUM', h: 'HIGH', ng: 'NG'};
        const priBadge = document.createElement('span');
        priBadge.className = `priority-badge priority-${item.priority}`;
        priBadge.textContent = priMap[item.priority];
        priTd.appendChild(priBadge);
        tr.appendChild(priTd);

        // Labels TD
        const labelsTd = document.createElement('td');
        labelsTd.className = 'center';
        item.labels.forEach(label => {
            if (labels[label]) {
                const emojiSpan = document.createElement('span');
                emojiSpan.textContent = labels[label];
                emojiSpan.title = label;
                labelsTd.appendChild(emojiSpan);
            }
        });
        tr.appendChild(labelsTd);

        // Text TD
        const textTd = document.createElement('td');
        textTd.textContent = item.text;
        tr.appendChild(textTd);

        tbody.appendChild(tr);
    });

    // Double-click for ticking
    tbody.addEventListener('dblclick', function(e) {
        const tr = e.target.closest('tr');
        if (tr && tr.parentElement === tbody) {
            const id = tr.getAttribute('data-id');
            tr.classList.toggle('ticked');
            const tickTd = tr.querySelector('td:first-child');
            tickTd.textContent = tr.classList.contains('ticked') ? '✓' : '';
            let ticked = $.jStorage.get('tickedItems', []);
            if (tr.classList.contains('ticked')) {
                if (!ticked.includes(id)) {
                    ticked.push(id);
                }
            } else {
                ticked = ticked.filter(t => t !== id);
            }
            $.jStorage.set('tickedItems', ticked);
        }
    });

    // Export button
    document.getElementById('export-btn').addEventListener('click', function() {
        const ticked = $.jStorage.get('tickedItems', []);
        const dataStr = JSON.stringify(ticked, null, 2);
        const blob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cheatsheet-progress.json';
        a.click();
        URL.revokeObjectURL(url);
    });

    // Import button
    document.getElementById('import-btn').addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    try {
                        const ticked = JSON.parse(e.target.result);
                        $.jStorage.set('tickedItems', ticked);
                        location.reload(); // Reload to apply
                    } catch (err) {
                        alert('Invalid file');
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    });
});