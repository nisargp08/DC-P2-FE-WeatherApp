import dayjs from 'dayjs';

export const helperFilters = {
    filters: {
        // Round value
        round(value) {
            if (value != "") {
                return Math.round(value);
            }
        },
        // Format date
        formatDate(timestamp) {
            if (timestamp != "") {
                return dayjs(timestamp).format('ddd,DD MMM');
            }
        }
    }
}

export const helperMethods = {
    methods : {
         // Return image based on the type of weather
         weatherImage(weatherType) {
            weatherType = weatherType.replace(/\s+/g, '');
            return require(`@/assets/images/${weatherType}.png`);
        }
    }
}